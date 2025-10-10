import { TextInput, View } from 'react-native';
import { InputComponent } from './types';

function Inputs({ _placeholder, _id, _type="default", _defaultValue, _secureTextEntry }: InputComponent) {
    return (
        <View>
            <TextInput
                placeholder={_placeholder}
                defaultValue={_defaultValue}
                secureTextEntry={_secureTextEntry}
                keyboardType={_type}
                autoCorrect={true}
            />
        </View>
    )
}

export { Inputs };
