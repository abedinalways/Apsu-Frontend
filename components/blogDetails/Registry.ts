import BulletList from './BulletList';
import Callout from './Callout';
import ComparisonTable from './ComparisonTable';
import Divider from './Divider';
import Heading from './Heading';
import HeroImage from './HeroImage';
import IconGrid from './IconGrid';
import ImageText from './ImageText';
import NumberList from './NumberList';
import Paragraph from './Paragraph';
import BlogQuote from './Quote';
import Steps from './Steps';
import Disclaimer from './Disclaimer';
import Highlight from './Highlight';


export const BLOG_COMPONENTS = {
  heading: Heading,
  paragraph: Paragraph,
  richText: Paragraph,
  disclaimer: Disclaimer,
  highlight: Highlight,
  image: HeroImage,
  bullet: BulletList,
  number: NumberList,
  imageText: ImageText,
  quote: BlogQuote,
  divider: Divider,
  callout: Callout,
  steps: Steps,
  iconGrid: IconGrid,
  table: ComparisonTable,
};
