import {
  Dumbbell,
  UtensilsCrossed,
  DatabaseBackup,
  CalendarCheck,
  ReceiptText,
  Trophy,
  PackageSearch,
  GraduationCap,
  MessagesSquare,
  HeartPulse,
  Waypoints,
  Shield,
  Smartphone,
  Globe,
  MonitorCog,
  Server,
  type LucideIcon,
} from 'lucide-react';
import type { Platform } from '../lib/products';

/** Un ícono por producto, todos de la misma familia y el mismo grosor. */
export const productIcon: Record<string, LucideIcon> = {
  gymtrack: Dumbbell,
  'menu-listo': UtensilsCrossed,
  'db-guardian': DatabaseBackup,
  turnospro: CalendarCheck,
  'club-cuotas': ReceiptText,
  golazo: Trophy,
  mistock: PackageSearch,
  egresados: GraduationCap,
  'whatsapp-service': MessagesSquare,
  fisiogestiona: HeartPulse,
  trazo: Waypoints,
  'federal-fc': Shield,
};

export const platformIcon: Record<Platform, LucideIcon> = {
  movil: Smartphone,
  web: Globe,
  escritorio: MonitorCog,
  infra: Server,
};

export const accentVar: Record<string, string> = {
  jade: 'var(--au-jade)',
  cyan: 'var(--au-cyan)',
  violet: 'var(--au-violet)',
  magenta: 'var(--au-magenta)',
  signal: 'var(--signal-strong)',
};
