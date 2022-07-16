import React from 'react'
import useGitHub from '../../hooks/github-hooks';
import * as S from './styled' //import styled component
const StatusCount = () => {
  const {gitHubState} = useGitHub();
  return (
    <S.WrapperStatusCount>
    <div>
      <h4>Followers</h4>
      <span> {gitHubState.user.followers}</span>
    </div>
    <div>
      <h4>Followings</h4>
      <span> {gitHubState.user.following}</span>
    </div>
    <div>
      <h4>Gists</h4>
      <span> {gitHubState.user.public_gists}</span>
    </div>
    <div>
      <h4>Repos</h4>
      <span> {gitHubState.user.public_repos}</span>
    </div>
  </S.WrapperStatusCount>
  )
}

export default StatusCount;
