import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import InsightsIcon from "@mui/icons-material/Insights";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonIcon from "@mui/icons-material/Person";
import PublishedWithChangesRoundedIcon from "@mui/icons-material/PublishedWithChangesRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

type DropDownItem = {
  href: string;
  key: string;
  label: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

type NavLink = {
  href: string;
  key: string;
  label: string;
  dropdown?: DropDownItem[];
};

export const NAV_LINKS: NavLink[] = [
  {
    href: "/about-us",
    key: "aboutus",
    label: "About us",
    dropdown: [
      {
        href: "/leadership",
        key: "leadership",
        label: "Leadership",
        icon: PersonIcon,
      },
      {
        href: "/insights",
        key: "insights",
        label: "Insights",
        icon: InsightsIcon,
      },
      { href: "/news", key: "news", label: "News", icon: NewspaperIcon },
    ],
  },
  {
    href: "/services",
    key: "services",
    label: "Services",
    dropdown: [
      {
        href: "/health-it",
        key: "healthit",
        label: "Health IT",
        icon: LocalHospitalIcon,
      },
      {
        href: "/digital-services",
        key: "digitalservices",
        label: "Digital Services",
        icon: SupportAgentIcon,
      },
      {
        href: "/web-development",
        key: "webdevelopment",
        label: "Web Development",
        icon: ComputerRoundedIcon,
      },
      {
        href: "/data-management-analytics",
        key: "datamanagementanalytics",
        label: "Data Management and Analytics",
        icon: BarChartRoundedIcon,
      },
      {
        href: "/ai-and-machine-learning",
        key: "aiandmachinelearning",
        label: "AI and Machine Learning",
        icon: AutoAwesomeIcon,
      },
      {
        href: "/it-application-services",
        key: "itapplicationservices",
        label: "IT Application Services",
        icon: MiscellaneousServicesIcon,
      },
      {
        href: "/database-management",
        key: "databasemanagement",
        label: "Database Management",
        icon: StorageRoundedIcon,
      },
      {
        href: "/information-security",
        key: "informationsecurity",
        label: "Information Security",
        icon: AdminPanelSettingsRoundedIcon,
      },
      {
        href: "/quality-assurance-and-testing",
        key: "qualityassuranceandtesting",
        label: "Quality Assurance and Testing",
        icon: PublishedWithChangesRoundedIcon,
      },
      {
        href: "/staff-augmentation",
        key: "staffaugmentation",
        label: "Staff Augmentation",
        icon: PeopleAltRoundedIcon,
      },
      {
        href: "/products",
        key: "products",
        label: "Products",
        icon: Inventory2RoundedIcon,
      },
    ],
  },
  { href: "/clients", key: "clients", label: "Clients" },
  { href: "/vehicles", key: "vehicles", label: "Vehicles" },
  {
    href: "/careers",
    key: "careers",
    label: "Careers",
    dropdown: [
      {
        href: "/careers/internship-program",
        key: "internshipprogram",
        label: "Internship Program",
      },
      {
        href: "/careers/current-openings",
        key: "currentopenings",
        label: "Current Openings",
      },
    ],
  },
];

type Service = {
  href: string;
  name: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    href: "/health-it",
    name: "Health IT",
    description:
      "As a leader in health care’s digital transformation for over 20 years, Innosoft’s Health IT experience spans the entire ecosystem from serving providers and payers to driving innovation within government health agencies. We help our health care customers make better informed decisions by capturing valuable information and supporting analytical insights to help them see what’s ahead.  Our experience includes migrating health systems to the cloud, building decision support systems, implementing critical security measures, quantifying quality measures, developing data management and predictive analytics platforms, and visualizing data to inform program and policy development.",
    image: "/assets/health-it.png",
  },
  {
    href: "/digital-services",
    name: "Digital Services",
    description:
      "We help our customers get the most from their investment by migrating IT infrastructure to the cloud to improve performance and lower total cost of ownership. We provide services including cloud infrastructure and strategy, DevSecOps, and mobility solutions to enable information delivery anytime and anywhere.  Our services extend the lifetime of systems without compromising safety, quality, or capability. In short, we work with our customers to leverage their IT resources so that they are better equipped to handle ever-evolving mission requirements.",
    image: "/assets/digital-services.png",
  },
  {
    href: "/web-development",
    name: "Web Development",
    description:
      "We create client-focused, customer-centric digital experiences that deliver tangible and intuitive business results. Our Human-Centered Design processes keep us focused on the user to ensure content strategy is blended seamlessly with user experience (UX) design, resulting in streamlined interactions for both visitors and internal users.  We help our customers create websites that are inherently scalable, fault-tolerant, modifiable, and highly available across platforms. And our proactive approach to maintenance and security involves finding and fixing potential vulnerabilities as quickly as possible. ",
    image: "/assets/web-development.png",
  },
  {
    href: "/data-management-analytics",
    name: "Data Management and Analytics",
    description:
      "We help our customers realize the power of data for transformative growth by bringing business intelligence to decisionmakers’ fingertips. Our expertise spans the full spectrum of data services, including architecture, management, migration, security, analytics, and business intelligence.  We build and implement the processes, resources, and technologies to manage data effectively across the data development lifecycle. We provide database management services, build data warehouse solutions, and support effective data integration to be able to provide real-time analytics with rich visualizations and support results-driven collaboration.",
    image: "/assets/data-management-analytics.png",
  },
  {
    href: "/ai-and-machine-learning",
    name: "AI and Machine Learning",
    description:
      "We help organizations solve critical problems and make context-sensitive decisions by providing insights that combine computer science, modeling, statistics, analytics, and business understanding. We are experienced in feeding data into models defined by data scientists and in scaling theoretical data science models out to production-level models that handle terabytes of real-time data.  We understand that robotic process automation (RPA) is on the precipice of transforming business operations by augmenting human intelligence with machine intelligence. Innosoft helps combine RPA, cognitive capture, mobility, engagement, and analytics to ease implementations, mitigate compliance risk, and contribute to profitability.",
    image: "/assets/ai-and-machine-learning.png",
  },
  {
    href: "/it-application-services",
    name: "IT Application Services",
    description:
      "We provide enterprise-scale applications and digital solutions, helping our customers build, test, deploy, protect, manage, modernize, and optimize their environments. Today’s businesses and government agencies rely on responsive and secure access to their digital infrastructure, and our experts provide operationally-proven application services that help customers automate and future-proof their business systems.  From providing initial application development to proposing value engineering recommendations for strategic re-architecting that will decrease total cost of ownership, our services help customers keep simultaneous focus on innovation, performance, and affordability.",
    image: "/assets/it-application-services.png",
  },
  {
    href: "/database-management",
    name: "Database Management",
    description:
      "We provide database management expertise, services, and strategies to help our customers realize the full value of their enterprise data. We help organizations capture, manage, store, preserve and deliver enterprise content to better inform business decisions. Our certified DBAs and database engineers provide the deep expertise needed for our customer database environments of any scale, offering end-to-end and cost-effective database management, strategic consulting, and support services from database migration and performance monitoring to cloud-specific and big data solution development.",
    image: "/assets/database-management.png",
  },
  {
    href: "/information-security",
    name: "Information Security",
    description:
      "Helping our customers protect their data, IT, and cyber assets is critical to reducing business risk, maintaining mission focus, and ensuring necessary compliance. We support reliable and secure IT operating environments by assessing risk, understanding vulnerabilities, performing proactive testing, and focusing on continual improvement. We leverage our years of experience and industry-leading solutions to deliver effective data protection services across environments – inside the network, in the cloud, and on the move. Our vulnerability management solutions make it easy to discern the real threats and determine how to act on them. Our results-driven reporting and analytics provide relevant, actionable data, and our ability to provide zero-gap coverage of all devices (including network, web, mobile, cloud, and virtual infrastructure) helps to maintain enterprise-class scalability, flexibility and performance.",
    image: "/assets/information-security.png",
  },
  {
    href: "/quality-assurance-and-testing",
    name: "Quality Assurance and Testing",
    description:
      "We provide comprehensive Quality Assurance (QA) and testing services, including helping customers develop new QA strategies and enhance existing quality and testing programs. Focusing on reliability, efficiency, and effectiveness, our QA services include web and mobile applications testing across the systems engineering life cycle. Taking great care to ensure the privacy and security of customer data and all intellectual property, our QA services include: Functional Software Testing, Performance Testing, Load Testing, Regression Testing, Security Testing, Compliance Testing (HIPAA, GAMP, PCI DSS, Section 508, etc.), User Acceptance Testing, System Acceptance Testing, Benchmarking and Volume/Stress Testing, Unit Testing, Integration End-to-End Testing, Structural Testing. ",
    image: "/assets/quality-assurance-and-testing.png",
  },
  {
    href: "/staff-augmentation",
    name: "Staff Augmentation",
    description:
      "We have been a trusted provider of end-to-end staffing services for over 20 years, focusing on IT staff augmentation services for government agencies and large enterprises, including Fortune 100 companies. We are experts at providing rapid access to missing capabilities and skills, whether for immediate surge support, technical subject matter expertise, or long-term team augmentation. We work closely with our customers to discover their needs and then implement our streamlined business processes (pre-screening, background checks, legal compliance) to quickly onboard highly-qualified resources. Our simple and transparent cost models provide for scaling up or down to meet our customers’ needs, and we maintain a robust and flexible pool of expert staff across subject matters, industry experience, and time zones. ",
    image: "/assets/staff-augmentation.png",
  },
];
