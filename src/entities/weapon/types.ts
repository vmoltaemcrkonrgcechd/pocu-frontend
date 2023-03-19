export interface iFilter {
  attack: number[] | null;
  weight: number[] | null;
  orderBy: string[] | null;
}

export interface iPagination {
  limit: number;
  offset: number;
}

export interface iAllQP extends iFilter, iPagination {}
