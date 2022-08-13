import React from "react";
import { MaskedInput } from "antd-mask-input";

const DynamicPhone: React.FC = (props: any) => {
    const cellphoneMask = '+7(000) 000 00-00';
    const phoneMask = '+7(000) 000 00-00';
  
    const mask = React.useMemo(
      () => [
        {
          mask: cellphoneMask,
          lazy: true,
        },
        {
          mask: phoneMask,
          lazy: true,
        },
      ],
      []
    );
  
    return (
      <MaskedInput
        {...props}
        mask={mask}
        
        maskOptions={{
          
          dispatch: function (_appended, dynamicMasked) {
            const isCellPhone = dynamicMasked.unmaskedValue[2] === '9';
            return dynamicMasked.compiledMasks[isCellPhone ? 0 : 1];
          },
        }}
      />
    );
  };
export default DynamicPhone;