import { AuthConfirm } from "../pages/AuthConfirm";
import { Category } from "../pages/Category";
import { Confirmation } from "../pages/Confirmation";
import { Create } from "../pages/Create";
import { EmailConfirm } from "../pages/EmailConfirm";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
import { Login } from "../pages/Login";
import { MyOffers } from "../pages/MyOffers";
import { Register } from "../pages/Register";
import { TopUp } from "../pages/TopUp";
import { Warehouse } from "../pages/Warehouse";
import { WarehouseWithdraw } from "../pages/WarehouseWithdraw";
import { Support } from "../widgets/Support";
import Agreement from "./documents/Agreement";
import LicenseAgreement from "./documents/LicenseAgreement";
import PrivacyPolicy from "./documents/PrivacyPolicy";
import Rules from "./documents/Rules";

export const documentPages = ['/agreement', '/license-agreement', '/privacy-policy', '/rules'];
export const documentTitles = ['Пользовательское соглашение', 'Лицензионное соглашение', 'Политика конфиденциальности', 'Правила сервиса'];

export const routerConfig = {
  '': {
    component: <Home />
  },
  '/warehouse': {
    component: <Warehouse />,
    requireAuth: true,
  },
  '/top-up': {
    component: <TopUp />,
    requireAuth: true,
  },
  '/login': {
    component: <Login />
  },
  '/register': {
    component: <Register />
  },
  '/auth-confirm': {
    component: <AuthConfirm />
  },
  '/email-confirm': {
    component: <EmailConfirm />
  },
  '/my-offers': {
    component: <MyOffers />,
    requireAuth: true,
  },
  '/create': {
    component: <Create />,
    requireAuth: true,
  },
  '/warehouse/withdraw': {
    component: <WarehouseWithdraw />,
    requireAuth: true,
  },
  '/:slug': {
    component: <Category />
  },
  '/:slug/:item': {
    component: <Item />
  },
  '/help': {
    component: <Support />
  },
  '/agreement': {
    component: <Agreement />
  },
  '/license-agreement': {
    component: <LicenseAgreement />
  },
  '/privacy-policy': {
    component: <PrivacyPolicy />
  },
  '/rules': {
    component: <Rules />
  },
  '/deposit/confirmation': {
    component: <Confirmation />
  }
};

export const noNavPages = ['/login', '/auth-confirm', '/register'];