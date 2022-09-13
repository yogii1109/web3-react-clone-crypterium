import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { colors } from '../../../../styles/theme'

import * as Styled from './style'
import { questions, I_Question } from './util'

export const FAQ = () => {
  const [answerDisplyId, setAnswerDisplayId] = useState<number>(0)

  const handleFAQAnwers = (id: number) => {
    if (id === answerDisplyId) {
      setAnswerDisplayId(-1)
    } else {
      setAnswerDisplayId(id)
    }
  }

  return (
    <Styled.Section paddingtop="140px" paddingbottom="140px">
      <Styled.Wrapper>
        <Styled.Header>
          <Styled.PricingText aling="center">FAQ</Styled.PricingText>
          <Styled.Heading aling="center">Have any questions?</Styled.Heading>
        </Styled.Header>
        <Styled.FlexBox>
          <Styled.Container>
            <Styled.Questions>
              {questions.map((item: I_Question, index: number) => (
                <Styled.QuestionWrap key={index}>
                  <Styled.QuestionDiv>
                    <Styled.Question>{item.question}</Styled.Question>
                    <Styled.Icon
                      onClick={() => {
                        handleFAQAnwers(index)
                      }}
                    >
                      {answerDisplyId === index ? (
                        <IconContext.Provider
                          value={{
                            style: { transform: `rotate(-135deg)` },
                            size: '30px',
                            color: `${colors.leafgreen}`,
                          }}
                        >
                          <AiOutlinePlusCircle />
                        </IconContext.Provider>
                      ) : (
                        <IconContext.Provider value={{ style: {}, size: '30px', color: `${colors.blueicon}` }}>
                          <AiOutlinePlusCircle />
                        </IconContext.Provider>
                      )}
                    </Styled.Icon>
                  </Styled.QuestionDiv>
                  <Styled.Answer display={answerDisplyId === index}>
                    <Styled.Para>{item.answer}</Styled.Para>
                  </Styled.Answer>
                </Styled.QuestionWrap>
              ))}
            </Styled.Questions>
            <Styled.Button>
              <Styled.ShowMoreA>
                <Styled.Btn>Show More</Styled.Btn>
              </Styled.ShowMoreA>
            </Styled.Button>
          </Styled.Container>
        </Styled.FlexBox>
      </Styled.Wrapper>
    </Styled.Section>
  )
}
