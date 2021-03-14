import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickName: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickName, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickName}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickName="Victor Manoel"/>

            <Role>Offline - 18</Role>
            <UserRow nickName="Diego Fernandes" isBot />
            <UserRow nickName="Diego Fernandes" isBot />
            <UserRow nickName="Diego Fernandes" isBot />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes" isBot />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes" isBot />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes"  />
            <UserRow nickName="Diego Fernandes" isBot />
            <UserRow nickName="Diego Fernandes"  />

        </Container>
    )
};

export default UserList;