import { Card } from "./Card";
import { FavoritesList } from "./FavoritesList";
import { FavoritesListEmptyMessage } from "./FavoritesListEmptyMessage";

export function FavoritesSection({favorites}) {
  return (
    (favorites.length>0)
      ?<FavoritesList favorites={favorites}/>
      :<FavoritesListEmptyMessage/>
  )
}