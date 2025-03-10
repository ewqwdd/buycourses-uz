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
import FAQ from "./documents/FAQ";
import PrivacyPolicy from "./documents/PrivacyPolicy";
import ReturnsAndRefundsPolicy from "./documents/ReturnsAndRefundsPolicy";
import ShippingPolicy from "./documents/ShippingPolicy";
import TermsAndConditions from "./documents/TermsAndConditions";

export const documentPages = ['/shipping-policy', '/returns-and-refunds', '/privacy-policy', '/terms-and-conditions', '/faq'];
export const documentTitles = [
  'Shipping Policy',
  'Refund and Return Policy',
  'Privacy Policy',
  'Terms and Conditions',
  'Frequently Asked Questions (FAQ)'
];

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
  '/privacy-policy': {
    component: <PrivacyPolicy />
  },
  '/returns-and-refunds': {
    component: <ReturnsAndRefundsPolicy />
  },
  '/terms-and-conditions': {
    component: <TermsAndConditions />
  },
  '/shipping-policy': {
    component: <ShippingPolicy />
  },
  '/faq': {
    component: <FAQ />
  },
  '/deposit/confirmation': {
    component: <Confirmation />
  }
};

export const noNavPages = ['/login', '/auth-confirm', '/register'];