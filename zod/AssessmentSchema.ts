import * as z from "zod";

const requiredMessage = "This field is required";

const requiredString = (message = requiredMessage) =>
  z.string({ required_error: message }).min(1, message);

const requiredNumber = (
  message = requiredMessage,
  min?: number,
  max?: number,
) => {
  let numberSchema = z.coerce.number({
    required_error: message,
    invalid_type_error: message,
  });

  if (min !== undefined) {
    numberSchema = numberSchema.min(min, message);
  }

  if (max !== undefined) {
    numberSchema = numberSchema.max(max);
  }

  return z.preprocess(
    (value) => (value === "" || value === undefined ? undefined : value),
    numberSchema,
  );
};

export const formSchema = z
  .object({
    // Steps 1-6 placeholder schemas from before
    goal: z.enum(["weight-loss", "birth-control", "sleep"], {
      required_error: requiredMessage,
    }),
    firstName: requiredString(),
    lastName: requiredString(),
    dob: requiredString(),
    gender: z.enum(["male", "female", "intersex"], {
      required_error: requiredMessage,
    }),
    residence: requiredString(),

    // Step 3: Health History Step One
    unitSystem: z.enum(["imperial", "metric"]).default("imperial"),
    heightFt: requiredNumber(requiredMessage, 1).optional(),
    heightIn: requiredNumber(requiredMessage, 0, 11).optional(),
    heightCm: requiredNumber(requiredMessage, 30).optional(),
    weightLbs: requiredNumber(requiredMessage, 1).optional(),
    weightKgs: requiredNumber(requiredMessage, 1).optional(),

    // Step 3: Health History Step Two
    medicalConditions: z.array(z.string()).min(1, requiredMessage),

    // Step 3: Health History Step Three
    selectedSideEffects: z.array(z.string()).min(1, requiredMessage),
    sideEffectsAdditionalDetails: requiredString().min(
      5,
      "Please describe the side effects you have experienced.",
    ),

    // Step 3: Health History Step Four
    knownAllergies: z.array(z.string()).min(1, requiredMessage),

    // Step 4: Goal Life style Activity Step One
    weightLossGoal: z.enum(
      [
        "under-20",
        "20-50",
        "50-plus",
        "not-sure",
        "rarely",
        "sometimes",
        "most-nights",
        "every-night",
      ],
      {
        required_error: requiredMessage,
      },
    ),

    // Step 4: Goal Life style Activity Step Two
    triedLosingWeightBefore: z.enum(
      ["never", "few-times", "couldnt-maintain", "many-times"],
      {
        required_error: requiredMessage,
      },
    ),

    // Step 4: Goal Life style Activity Step Three
    weightLossMethods: z.string().optional(),
    weightLossMotivation: z.string().optional(),
    weightLossBarriers: z.string().optional(),

    // Step 4: Goal Life style Activity Step Four
    lifestyleDescription: z.enum(
      ["sedentary", "light", "moderate", "extreme"],
      {
        required_error: requiredMessage,
      },
    ),
    eatingRestrictions: requiredString().min(
      3,
      "Please describe your eating restrictions.",
    ),
    sleepHours: requiredString(),

    // Step 5: Eligibility Check Step One
    nicotineUsage: z.enum(
      [
        "every-day",
        "few-times-week",
        "few-times-month",
        "quit-smoking",
        "other-nicotine",
        "never-used",
      ],
      {
        required_error: requiredMessage,
      },
    ),
    // Step 5: Eligibility Check Step Two
    nicotineProductTypes: z.array(z.string()).min(1, requiredMessage),

    // Step 5: Eligibility Check Step Three
    smokingFrequency: z.enum(
      ["never", "occasionally", "daily", "stopped-last-month"],
      {
        required_error: requiredMessage,
      },
    ),

    // Step 5: Eligibility Check Step Four
    bloodPressureValue: z.string().optional(),
    monitoredForHighBP: z.enum(["yes", "no"], {
      required_error: requiredMessage,
    }),

    // Step 5: Eligibility Check Step Five
    autoimmuneConditions: z.array(z.string()).min(1, requiredMessage),

    // Step 5: Eligibility Check Step Six
    currentMedications: z.array(z.string()).min(1, requiredMessage),

    // Step 5: Eligibility Check Step Seven
    medicalTeamConcerns: requiredString(),

    // Step 5: Eligibility Check Step Eight
    isCurrentlyPregnant: z.enum(["yes", "no", "not-sure"], {
      required_error: requiredMessage,
    }),

    // Add this field validation to your central form Schema definition
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Please enter a valid email address."),

    // Add this field to your central formSchema definition if validation/confirmation is required
    reviewAcknowledged: z.boolean().refine((val) => val === true, {
      message: "You must review and acknowledge the terms before continuing.",
    }),

    // Add these layout rules to your validation schema object block
    shippingAddress: z.string().min(5, "Address is required."),
    shippingState: z.string().min(1, "State is required."),
    shippingCity: z.string().min(1, "City is required."),
    shippingCountry: z.string().min(1, "Country is required."),
    shippingPostalCode: z.string().min(3, "Postal code is required."),
    billingSameAsShipping: z.boolean().default(true),
    receivePromotions: z.boolean().default(false),

    // Sleep Eligibility Check Step
    dailyEffects: z.array(z.string()).default([]),
    sleepRatingCategory: z.string().optional(),

    wakeUpFrequency: z.string().optional(),
    fallBackAsleep: z.string().optional(),
    screenTimeBeforeBed: z.string().optional(),

    pastSleepTreatments: z.array(z.string()).default([]),

    diagnosedConditions: z.array(z.string()).default([]),
    takesSleepMedication: z.string().optional(),
    heavySnoringOrApnea: z.string().optional(),
    pregnantOrBreastfeeding: z.string().optional(),

    //Birth Control Goal Lifestyle Activity Step
    birthControlGoals: z.array(z.string()).default([]),
    preferredMethod: z.string().optional(),

    // Step 6: Treatment Plan Step One
    treatmentPlan: z
      .enum(["1-month", "3-months", "6-months", "12-months"])
      .default("3-months"),

    // Step 7: Schedule Consultation
    consultationDate: requiredString(),
    consultationTime: requiredString(),
    timezone: z.string().default("America/Los_Angeles"),

    // Step 8: Self Checkout
    cardName: requiredString(),
    cardNumber: requiredString().min(16, "Enter a valid card number").max(19),
    cardExpiry: z
      .string()
      .min(1, requiredMessage)
      .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Use MM/YY format"),
    cardCvv: requiredString().min(3, "CVV is required").max(4),
    agreeTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),

    attachments: z
      .array(
        z.object({
          id: z.string().optional(),
          name: z.string(),
          size: z.string(),
          type: z.string(),
        }),
      )
      .default([]),

    videoAttachments: z
      .array(
        z.object({
          id: z.string().optional(),
          name: z.string(),
          size: z.string(),
          type: z.string(),
        }),
      )
      .default([]),
  })
  .superRefine((data, ctx) => {
    const requireNumber = (
      field: "heightFt" | "heightIn" | "heightCm" | "weightLbs" | "weightKgs",
      min = 1,
    ) => {
      const value = data[field];

      if (value === undefined || Number.isNaN(value) || value < min) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: requiredMessage,
          path: [field],
        });
      }
    };

    if (data.unitSystem === "imperial") {
      requireNumber("heightFt");
      requireNumber("heightIn", 0);
      requireNumber("weightLbs");
      return;
    }

    requireNumber("heightCm");
    requireNumber("weightKgs");
  });

export type FormData = z.infer<typeof formSchema>;
