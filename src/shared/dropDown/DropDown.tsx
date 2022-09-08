import React from 'react'
import * as Styled from './style'

export interface I_Option {
  option: string
  active: boolean
}

type dropdownhover = 'HOME' | 'PAGES' | 'NULL'

interface I_DropDownProps {
  options: I_Option[]
  top?: string
  left?: string
  setHover?: React.Dispatch<React.SetStateAction<dropdownhover>>
  hover?: dropdownhover
}

export const DropDown: React.FC<I_DropDownProps> = (Props) => {
  const { options, top } = Props
  return (
    <Styled.DropDownContainer>
      <Styled.DropDownBox>
        {options.map((item: I_Option, index: number) => (
          <Styled.Item key={index} value={item.active}>
            {item.option}
          </Styled.Item>
        ))}
      </Styled.DropDownBox>
    </Styled.DropDownContainer>
  )
}

export default DropDown
