import { AuthConfirm } from "../pages/AuthConfirm";
import { Category } from "../pages/Category";
import { EmailConfirm } from "../pages/EmailConfirm";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { TopUp } from "../pages/TopUp";
import { Warehouse } from "../pages/Warehouse";
import { WarehouseWithdraw } from "../pages/WarehouseWithdraw";
import { Support } from "../widgets/Support";

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
  }
};

export const noNavPages = ['/login', '/auth-confirm', '/register'];