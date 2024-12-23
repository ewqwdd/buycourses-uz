import { Auth } from "../pages/Auth";
import { AuthConfirm } from "../pages/AuthConfirm";
import { Category } from "../pages/Category";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
import { TopUp } from "../pages/TopUp";
import { Warehouse } from "../pages/Warehouse";
import { WarehouseWithdraw } from "../pages/WarehouseWithdraw";

export const routerConfig = {
  '': {
    component: <Home />
  },
  '/warehouse': {
    component: <Warehouse />
  },
  '/top-up': {
    component: <TopUp />
  },
  '/auth': {
    component: <Auth />
  },
  '/auth-confirm': {
    component: <AuthConfirm />
  },
  '/warehouse/withdraw': {
    component: <WarehouseWithdraw />
  },
  '/:slug': {
    component: <Category />
  },
  '/:slug/:item': {
    component: <Item />
  },
};

export const noNavPages = ['/auth', '/auth-confirm'];