import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Trash2,
  PlusSquare,
  ArrowLeftCircle,
  Edit,
  Eye,
  ChevronDown,
  ChevronUp,
  PlusCircle,
  Minus,
  Plus,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PlusSquare,
  Plus,
  Edit,
  Eye,
  Trash2,
  ArrowLeftCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Minus,
  XCircle,
  Play,
  Pause,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
