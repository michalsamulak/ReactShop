import React from 'react'
import { useFetchOnInit } from '../hooks/useFetchOnInit';
import { CategoriesContainer, CategoriesWrapper } from '../style/Categories.style'
import { Error } from "../style/Common";
import { HomeWrapper } from '../style/Home.style';
import { apiPaths } from '../utils/utils';

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
