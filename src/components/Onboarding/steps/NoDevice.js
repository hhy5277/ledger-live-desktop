// @flow

import React, { PureComponent } from 'react'
import { shell } from 'electron'

import Box from 'components/base/Box'
import IconUser from 'icons/User'
import IconCart from 'icons/Cart'
import IconTruck from 'icons/Truck'
import IconInfoCircle from 'icons/InfoCircle'
import Button from '../../base/Button/index'
import { Title, OnboardingFooterWrapper } from '../helperComponents'
import { OptionFlowCard } from './Init'

import type { StepProps } from '..'

class NoDevice extends PureComponent<StepProps, *> {
  render() {
    const { t, prevStep } = this.props

    const optionCards = [
      {
        key: 'buyNew',
        icon: <IconCart size={20} />,
        title: t('onboarding:noDevice.buyNew.title'),
        onClick: () => {
          shell.openExternal('https://www.ledgerwallet.com/')
        },
      },
      {
        key: 'trackOrder',
        icon: <IconTruck size={20} />,
        title: t('onboarding:noDevice.trackOrder.title'),
        onClick: () => {
          shell.openExternal('http://order.ledgerwallet.com/')
        },
      },
      {
        key: 'learnMore',
        icon: <IconInfoCircle size={20} />,
        title: t('onboarding:noDevice.learnMore.title'),
        onClick: () => {
          shell.openExternal('https://www.ledgerwallet.com/')
        },
      },
    ]

    return (
      <Box sticky pt={130}>
        <Box grow alignItems="center">
          <Box color="wallet">
            <IconUser size={36} />
          </Box>
          <Box m={5} style={{ maxWidth: 480 }}>
            <Title>{t('onboarding:noDevice.title')}</Title>
          </Box>
          <Box pt={4} flow={4}>
            {optionCards.map(card => <OptionFlowCard key={card.key} card={card} />)}
          </Box>
        </Box>
        <OnboardingFooterWrapper>
          <Button padded outlineGrey onClick={() => prevStep()} mr="auto">
            {t('app:common.back')}
          </Button>
        </OnboardingFooterWrapper>
      </Box>
    )
  }
}

export default NoDevice