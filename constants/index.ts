import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import InsightsIcon from '@mui/icons-material/Insights';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonIcon from '@mui/icons-material/Person';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

type DropDownItem = {
  href: string,
  key: string,
  label: string,
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
}

type NavLink = {
  href: string;
  key: string;
  label: string;
  dropdown?: DropDownItem[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", key: "aboutus", label: "About us",
    dropdown: [
      { href: "/leadership", key: "leadership", label: "Leadership", icon: PersonIcon  },
      { href: "/insights", key: "insights", label: "Insights", icon: InsightsIcon },
      { href: "/news", key: "news", label: "News", icon: NewspaperIcon }
    ]
   },
  { href: "/", key: "services", label: "Services", 
    dropdown: [
    { href: "/health-it", key: "healthit", label: "Health IT", icon: LocalHospitalIcon },
    { href: "/digital-services", key: "digitalservices", label: "Digital Services", icon: SupportAgentIcon },
    { href: "/web-development", key: "webdevelopment", label: "Web Development", icon: ComputerRoundedIcon },
    { href: "/data-management-analytics", key: "datamanagementanalytics", label: "Data Management and Analytics", icon: BarChartRoundedIcon },
    { href: "/ai-and-machine-learning", key: "aiandmachinelearning", label: "AI and Machine Learning", icon: AutoAwesomeIcon },
    { href: "/it-application-services", key: "itapplicationservices", label: "IT Application Services", icon: MiscellaneousServicesIcon },
    { href: "/database-management", key: "databasemanagement", label: "Database Management", icon: StorageRoundedIcon},
    { href: "/information-security", key: "informationsecurity", label: "Information Security", icon: AdminPanelSettingsRoundedIcon },
    { href: "/quality-assurance-and-testing", key: "qualityassuranceandtesting", label: "Quality Assurance and Testing", icon: PublishedWithChangesRoundedIcon },
    { href: "/staff-augmentation", key: "staffaugmentation", label: "Staff Augmentation", icon: PeopleAltRoundedIcon},
    { href: "/products", key: "products", label: "Products", icon: Inventory2RoundedIcon },
  ] 
},
  { href: "/", key: "clients", label: "Clients" },
  { href: "/", key: "vehicles", label: "Vehicles" },
  { href: "/", key: "careers", label: "Careers", 
    dropdown: [
      { href: "/careers/internship-program", key: "internshipprogram", label: "Internship Program"},
      { href: "/careers/current-openings", key: "currentopenings", label: "Current Openings"}
    ]
   },
];
