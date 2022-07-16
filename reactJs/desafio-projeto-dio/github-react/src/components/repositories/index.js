import React, { useEffect, useState } from "react";
import useGitHub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  const { gitHubState, getUserRepos, getUserStarred } = useGitHub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (gitHubState.user.login) {
      getUserRepos(gitHubState.user.login);
      getUserStarred(gitHubState.user.login);
    }
    setHasUserForSearchrepos(gitHubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gitHubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitHubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitHubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
