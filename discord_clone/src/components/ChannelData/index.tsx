import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Victor Manoel"
                    date="26/07/2021"
                    content="Today is  my bithday."
                />

                <ChannelMessage
                    author="Victor Manoel"
                    date="26/07/2021"
                    content="Today is  my bithday."
                />

                <ChannelMessage
                    author="Victor Manoel"
                    date="26/07/2021"
                    content="Today is  my bithday."
                />

                <ChannelMessage
                    author="Victor Manoel"
                    date="26/07/2021"
                    content="Today is  my bithday."
                />



                <ChannelMessage
                    author="Diego Fernandes"
                    date="26/072021"
                    content={
                        <>
                            <Mention>@Victor Manoel</Mention>, Happy bithday!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;