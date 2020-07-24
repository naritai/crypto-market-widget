import { 
  withData, 
  withMarvelService, 
  withChildFunction,
  compose
} from '../hoc-helpers';
import ItemList from '../ItemList';

const renderName = (item: any) => item.name;
const renderTitle = (item: any) => item.title;

const mapCharacterMethodsToProps = (marvelService: any) => {
  return {
    getData: marvelService.getAllCharacters
  }
};

const mapComicsMethodsToProps = (marvelService: any) => {
  return {
    getData: marvelService.getAllComics
  }
};

const CharacterList = compose(
                        withMarvelService(mapCharacterMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                      )(ItemList);

const ComicsList = compose(
                    withMarvelService(mapComicsMethodsToProps),
                    withData,
                    withChildFunction(renderTitle)
                  )(ItemList);

export { 
  CharacterList,
  ComicsList
};