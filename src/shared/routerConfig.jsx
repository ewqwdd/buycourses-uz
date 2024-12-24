import { Auth } from "../pages/Auth";
import { AuthConfirm } from "../pages/AuthConfirm";
import { Category } from "../pages/Category";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
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
  '/auth': {
    component: <Auth />
  },
  '/auth-confirm': {
    component: <AuthConfirm />
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

export const noNavPages = ['/auth', '/auth-confirm'];