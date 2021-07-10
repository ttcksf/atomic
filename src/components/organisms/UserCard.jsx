import { memo } from "react";
import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { UserIconWithName } from "../molecules/user/UserIconWithName";
export const UserCard = memo((props) => {
  console.log("usercard");

  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>Tel</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Webサイト</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  margin-bottom: 0px;
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    overflow-wrap: break-word;
    padding-bottom: 8px;
  }
`;
