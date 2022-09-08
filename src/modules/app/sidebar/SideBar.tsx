import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { BiChevronDown } from 'react-icons/bi'
import { colors } from '../../../styles/theme'
import { FlexBox, Login } from '../navigation/style'
import { flagList, I_FlagIcon } from '../navigation/utils'
import { homeOptions, pageOptions, Menu, I_Options } from './style'
import * as Styled from './style'
import { I_Option } from '../../../shared/dropDown/DropDown'

export const SideBar: React.FC = () => {
  const [activeFlag, setActiveFlag] = useState<I_FlagIcon>(flagList[0])
  const [selectflag, setSelectFlag] = useState<boolean>(false)
  const [dropDownActive, setDropDownActive] = useState<number | null>()
  const [dropDownOptions, setDropDownOptions] = useState<I_Option[]>([])

  const handleDropDown = (item: I_Options, index: number) => {
    if (dropDownActive === index) {
      setDropDownActive(null)
      return
    }
    if (item.dropDown) {
      if (index === 0) {
        setDropDownOptions(homeOptions)
        setDropDownActive(index)
      } else if (index === 1) {
        setDropDownOptions(pageOptions)
        setDropDownActive(index)
      }
    }
  }

  return (
    <Styled.Container>
      <Styled.Wrapper dropDownActive={dropDownActive}>
        <Styled.Box>
          {Menu.map((item: I_Options, index: number) => (
            <Styled.BoxOption key={index} hasDropDown={item.dropDown} onClick={() => handleDropDown(item, index)}>
              {item.option}{' '}
              {item.dropDown && (
                <IconContext.Provider value={{ style: { float: 'right' }, color: `${colors.spaceGrey}`, size: '16px' }}>
                  <>
                    <BiChevronDown />
                  </>
                </IconContext.Provider>
              )}
              {dropDownActive === index &&
                dropDownOptions.length > 0 &&
                dropDownOptions?.map((item: I_Option, index: number) => (
                  <Styled.Options key={index}>{item.option}</Styled.Options>
                ))}
            </Styled.BoxOption>
          ))}
        </Styled.Box>
        <Styled.NavButtons>
          <Styled.Login>Login</Styled.Login>
          <Styled.SignUp>Sign up</Styled.SignUp>
          <Styled.FlagDiv>
            <Styled.ColorDiv active={selectflag}>
              <Styled.Flag onClick={() => setSelectFlag((prev) => !prev)}>
                <img src={activeFlag.icon} />
              </Styled.Flag>
            </Styled.ColorDiv>
            <Styled.FlagList active={selectflag}>
              {flagList
                .filter((item: I_FlagIcon) => item.id !== activeFlag.id)
                .map((item: I_FlagIcon) => (
                  <Styled.Flag
                    key={item.id}
                    onClick={() => {
                      setActiveFlag(item)
                      setSelectFlag(false)
                    }}
                  >
                    <img src={item.icon} />
                  </Styled.Flag>
                ))}
            </Styled.FlagList>
          </Styled.FlagDiv>
        </Styled.NavButtons>
      </Styled.Wrapper>
    </Styled.Container>
  )
}
