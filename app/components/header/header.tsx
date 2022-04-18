import React from 'react';
import { View } from 'react-native';
import { HeaderProps } from './header.props';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { Icon } from '../icon/icon';
import { translate } from '../../i18n/';
import { styles } from './header.styles';


export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props;

  const header = headerText || (headerTx && translate(headerTx)) || "";

  return (
    <View style={[styles.root, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : null}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : null}
    </View>
  )
}
