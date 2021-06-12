import { Hello } from '../sdl.types';
import { HelloModel } from '@prisma/client';

export const mapHello = (h: HelloModel): Hello => ({
    id: h.id.toString(),
    description: h.text,
});
