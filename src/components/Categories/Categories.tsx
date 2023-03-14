import React from 'react'
import { useFetchOnInit } from '../../hooks/useFetchOnInit';
import { CategoriesContainer, CategoriesWrapper } from './Categories.style'
import { Error } from "../../style/Global.style";
import { HomeWrapper } from '../Header/Home.style';
import { apiPaths } from '../../utils/utils';
import { Helmet } from 'react-helmet';

export const Categories = () => {

  const { data, loading, error } = useFetchOnInit<string[]>(
    apiPaths.categories
);

if (error) {
  return (
      <HomeWrapper>
          <Error>{error.message}</Error>
      </HomeWrapper>
  );
}


if (loading) {
  return (
      <HomeWrapper>
          <span className="loader"></span>
      </HomeWrapper>
  );
}

if (!loading && data === null) {
  return (
      <HomeWrapper>
          <Error>Sorry, no data retrieved...</Error>;
      </HomeWrapper>
  );
}

  return (
    <>
       <Helmet title="Categories | React Shop"/>
      {data?.map(categorie => {
        return (
          <CategoriesContainer key={categorie}>
            <CategoriesWrapper>

            {categorie.toUpperCase()}
            </CategoriesWrapper>
            
            </CategoriesContainer>

        )
      })}
    </>
  )
}
