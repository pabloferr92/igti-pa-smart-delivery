import { useNavigation } from '@react-navigation/native';
import { Box, Menu, HamburgerIcon, Pressable } from 'native-base';
import { Link } from 'native-base';
import { MenuButton } from './styles';

export function MainMenu(): JSX.Element {
  type Navigation = {
    navigate: (screen: string, params: any) => void;
  };

  const { navigate } = useNavigation<Navigation>();

  return (
    <Box w="100%" h="50%" alignItems="center">
      <Menu
        w="300"
        trigger={triggerProps => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          );
        }}
      >
        <Menu.Item
          onPress={() => {
            navigate('MyOrders', {});
          }}
        >
          Perfil
        </Menu.Item>
        <Menu.Item
          onPress={() => {
            navigate('MyOrders', {});
          }}
        >
          Meus Pedidos
        </Menu.Item>
        <Menu.Item
          onPress={() => {
            navigate('MyOrders', {});
          }}
        >
          Configurações
        </Menu.Item>
      </Menu>
    </Box>
  );
}
