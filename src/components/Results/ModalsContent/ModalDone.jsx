import React from 'react'
import PropTypes from 'prop-types'
import { BtnBox, ModalBox, ModalText, ResultsBtn } from '../Results.styled'
import { ReactComponent as OkeyDone } from 'Assets/svg/okeyDone.svg';

const ModalDone = ({onClose}) => {
  return (
    <ModalBox>
						<OkeyDone />

						<ModalText>Congratulations! Another book read.</ModalText>

						<BtnBox>
							<ResultsBtn type="button" onClick={onClose}>
								Done
							</ResultsBtn>
						</BtnBox>
					</ModalBox>
  )
}

ModalDone.propTypes = {
   onClose: PropTypes.func.isRequired
}

export default ModalDone