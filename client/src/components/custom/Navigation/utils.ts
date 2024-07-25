import { TypeSetState } from '@/types/SetState.type';
import { NavOption } from './Navigation';

export const deactiveOption = (
    setOption: TypeSetState<NavOption[]>,
    options: NavOption[],
    currentOption: NavOption
) => {
    setOption(
        options.map((optionData) => {
            if (optionData.id === currentOption.id) {
                return {
                    ...optionData,
                    active: true
                };
            }

            return {
                ...optionData,
                active: false
            };
        })
    );
};
