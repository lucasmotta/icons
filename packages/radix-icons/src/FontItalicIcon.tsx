import * as React from 'react';
import { BaseIconProps } from './types';

interface FontItalicIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const FontItalicIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: FontItalicIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.425 3.00011C5.425 2.75158 5.62647 2.55011 5.875 2.55011H5.88477H5.89453H5.9043H5.91406H5.92383H5.93359H5.94336H5.95312H5.96289H5.97266H5.98242H5.99219H6.00195H6.01172H6.02148H6.03125H6.04102H6.05078H6.06055H6.07031H6.08008H6.08984H6.09961H6.10938H6.11914H6.12891H6.13867H6.14844H6.1582H6.16797H6.17773H6.1875H6.19727H6.20703H6.2168H6.22656H6.23633H6.24609H6.25586H6.26562H6.27539H6.28516H6.29492H6.30469H6.31445H6.32422H6.33398H6.34375H6.35352H6.36328H6.37305H6.38281H6.39258H6.40234H6.41211H6.42188H6.43164H6.44141H6.45117H6.46094H6.4707H6.48047H6.49023H6.5H6.50977H6.51953H6.5293H6.53906H6.54883H6.55859H6.56836H6.57812H6.58789H6.59766H6.60742H6.61719H6.62695H6.63672H6.64648H6.65625H6.66602H6.67578H6.68555H6.69531H6.70508H6.71484H6.72461H6.73438H6.74414H6.75391H6.76367H6.77344H6.7832H6.79297H6.80273H6.8125H6.82227H6.83203H6.8418H6.85156H6.86133H6.87109H6.88086H6.89062H6.90039H6.91016H6.91992H6.92969H6.93945H6.94922H6.95898H6.96875H6.97852H6.98828H6.99805H7.00781H7.01758H7.02734H7.03711H7.04688H7.05664H7.06641H7.07617H7.08594H7.0957H7.10547H7.11523H7.125H7.13477H7.14453H7.1543H7.16406H7.17383H7.18359H7.19336H7.20312H7.21289H7.22266H7.23242H7.24219H7.25195H7.26172H7.27148H7.28125H7.29102H7.30078H7.31055H7.32031H7.33008H7.33984H7.34961H7.35938H7.36914H7.37891H7.38867H7.39844H7.4082H7.41797H7.42773H7.4375H7.44727H7.45703H7.4668H7.47656H7.48633H7.49609H7.50586H7.51562H7.52539H7.53516H7.54492H7.55469H7.56445H7.57422H7.58398H7.59375H7.60352H7.61328H7.62305H7.63281H7.64258H7.65234H7.66211H7.67188H7.68164H7.69141H7.70117H7.71094H7.7207H7.73047H7.74023H7.75H7.75977H7.76953H7.7793H7.78906H7.79883H7.80859H7.81836H7.82812H7.83789H7.84766H7.85742H7.86719H7.87695H7.88672H7.89648H7.90625H7.91602H7.92578H7.93555H7.94531H7.95508H7.96484H7.97461H7.98438H7.99414H8.00391H8.01367H8.02344H8.0332H8.04297H8.05273H8.0625H8.07227H8.08203H8.0918H8.10156H8.11133H8.12109H8.13086H8.14062H8.15039H8.16016H8.16992H8.17969H8.18945H8.19922H8.20898H8.21875H8.22852H8.23828H8.24805H8.25781H8.26758H8.27734H8.28711H8.29688H8.30664H8.31641H8.32617H8.33594H8.3457H8.35547H8.36523H8.375H8.38477H8.39453H8.4043H8.41406H8.42383H8.43359H8.44336H8.45312H8.46289H8.47266H8.48242H8.49219H8.50195H8.51172H8.52148H8.53125H8.54102H8.55078H8.56055H8.57031H8.58008H8.58984H8.59961H8.60938H8.61914H8.62891H8.63867H8.64844H8.6582H8.66797H8.67773H8.6875H8.69727H8.70703H8.7168H8.72656H8.73633H8.74609H8.75586H8.76562H8.77539H8.78516H8.79492H8.80469H8.81445H8.82422H8.83398H8.84375H8.85352H8.86328H8.87305H8.88281H8.89258H8.90234H8.91211H8.92188H8.93164H8.94141H8.95117H8.96094H8.9707H8.98047H8.99023H9H9.00977H9.01953H9.0293H9.03906H9.04883H9.05859H9.06836H9.07812H9.08789H9.09766H9.10742H9.11719H9.12695H9.13672H9.14648H9.15625H9.16602H9.17578H9.18555H9.19531H9.20508H9.21484H9.22461H9.23438H9.24414H9.25391H9.26367H9.27344H9.2832H9.29297H9.30273H9.3125H9.32227H9.33203H9.3418H9.35156H9.36133H9.37109H9.38086H9.39062H9.40039H9.41016H9.41992H9.42969H9.43945H9.44922H9.45898H9.46875H9.47852H9.48828H9.49805H9.50781H9.51758H9.52734H9.53711H9.54688H9.55664H9.56641H9.57617H9.58594H9.5957H9.60547H9.61523H9.625H9.63477H9.64453H9.6543H9.66406H9.67383H9.68359H9.69336H9.70312H9.71289H9.72266H9.73242H9.74219H9.75195H9.76172H9.77148H9.78125H9.79102H9.80078H9.81055H9.82031H9.83008H9.83984H9.84961H9.85938H9.86914H9.87891H9.88867H9.89844H9.9082H9.91797H9.92773H9.9375H9.94727H9.95703H9.9668H9.97656H9.98633H9.99609H10.0059H10.0156H10.0254H10.0352H10.0449H10.0547H10.0645H10.0742H10.084H10.0938H10.1035H10.1133H10.123H10.1328H10.1426H10.1523H10.1621H10.1719H10.1816H10.1914H10.2012H10.2109H10.2207H10.2305H10.2402H10.25H10.2598H10.2695H10.2793H10.2891H10.2988H10.3086H10.3184H10.3281H10.3379H10.3477H10.3574H10.3672H10.377H10.3867H10.3965H10.4062H10.416H10.4258H10.4355H10.4453H10.4551H10.4648H10.4746H10.4844H10.4941H10.5039H10.5137H10.5234H10.5332H10.543H10.5527H10.5625H10.5723H10.582H10.5918H10.6016H10.6113H10.6211H10.6309H10.6406H10.6504H10.6602H10.6699H10.6797H10.6895H10.6992H10.709H10.7188H10.7285H10.7383H10.748H10.7578H10.7676H10.7773H10.7871H10.7969H10.8066H10.8164H10.8262H10.8359H10.8457H10.8555H10.8652H10.875C11.1235 2.55011 11.325 2.75158 11.325 3.00011C11.325 3.24864 11.1235 3.45011 10.875 3.45011H10.8652H10.8555H10.8457H10.8359H10.8262H10.8164H10.8066H10.7969H10.7871H10.7773H10.7676H10.7578H10.748H10.7383H10.7285H10.7188H10.709H10.6992H10.6895H10.6797H10.6699H10.6602H10.6504H10.6406H10.6309H10.6211H10.6113H10.6016H10.5918H10.582H10.5723H10.5625H10.5527H10.543H10.5332H10.5234H10.5137H10.5039H10.4941H10.4844H10.4746H10.4648H10.4551H10.4453H10.4355H10.4258H10.416H10.4062H10.3965H10.3867H10.377H10.3672H10.3574H10.3477H10.3379H10.3281H10.3184H10.3086H10.2988H10.2891H10.2793H10.2695H10.2598H10.25H10.2402H10.2305H10.2207H10.2109H10.2012H10.1914H10.1816H10.1719H10.1621H10.1523H10.1426H10.1328H10.123H10.1133H10.1035H10.0938H10.084H10.0742H10.0645H10.0547H10.0449H10.0352H10.0254H10.0156H10.0059H9.99609H9.98633H9.97656H9.9668H9.95703H9.94727H9.9375H9.92773H9.91797H9.9082H9.89844H9.88867H9.87891H9.86914H9.85938H9.84961H9.83984H9.83008H9.82031H9.81055H9.80078H9.79102H9.78125H9.77148H9.76172H9.75195H9.74219H9.73242H9.72266H9.71289H9.70312H9.69336H9.68359H9.67383H9.66406H9.6543H9.64453H9.63477H9.625H9.61523H9.60547H9.5957H9.58594H9.57617H9.56641H9.55664H9.54688H9.53711H9.52734H9.51758H9.50781H9.49805H9.48828H9.47852H9.46875H9.45898H9.44922H9.43945H9.42969H9.41992H9.41016H9.40039H9.39062H9.38086H9.37109H9.36133H9.35156H9.3418H9.33203H9.32227H9.3125H9.30273H9.29297H9.2832H9.27344H9.26367H9.25391H9.24414H9.23438H9.22461H9.21484H9.20508H9.19531H9.18555H9.17578H9.16602H9.15625H9.14648H9.13672H9.12695H9.11719H9.10742H9.09766H9.08789H9.07812H9.06836H9.05859H9.04883H9.03906H9.0293H9.01953H9.00977H9H8.99023H8.98047H8.9707H8.96094H8.95117H8.94141H8.93164H8.92188H8.92045L7.35576 11.05H9.125C9.37353 11.05 9.575 11.2515 9.575 11.5C9.575 11.7486 9.37353 11.95 9.125 11.95H4.125C3.87647 11.95 3.675 11.7486 3.675 11.5C3.675 11.2515 3.87647 11.05 4.125 11.05H6.07954L7.64423 3.45011H7.64258H7.63281H7.62305H7.61328H7.60352H7.59375H7.58398H7.57422H7.56445H7.55469H7.54492H7.53516H7.52539H7.51562H7.50586H7.49609H7.48633H7.47656H7.4668H7.45703H7.44727H7.4375H7.42773H7.41797H7.4082H7.39844H7.38867H7.37891H7.36914H7.35938H7.34961H7.33984H7.33008H7.32031H7.31055H7.30078H7.29102H7.28125H7.27148H7.26172H7.25195H7.24219H7.23242H7.22266H7.21289H7.20312H7.19336H7.18359H7.17383H7.16406H7.1543H7.14453H7.13477H7.125H7.11523H7.10547H7.0957H7.08594H7.07617H7.06641H7.05664H7.04688H7.03711H7.02734H7.01758H7.00781H6.99805H6.98828H6.97852H6.96875H6.95898H6.94922H6.93945H6.92969H6.91992H6.91016H6.90039H6.89062H6.88086H6.87109H6.86133H6.85156H6.8418H6.83203H6.82227H6.8125H6.80273H6.79297H6.7832H6.77344H6.76367H6.75391H6.74414H6.73438H6.72461H6.71484H6.70508H6.69531H6.68555H6.67578H6.66602H6.65625H6.64648H6.63672H6.62695H6.61719H6.60742H6.59766H6.58789H6.57812H6.56836H6.55859H6.54883H6.53906H6.5293H6.51953H6.50977H6.5H6.49023H6.48047H6.4707H6.46094H6.45117H6.44141H6.43164H6.42188H6.41211H6.40234H6.39258H6.38281H6.37305H6.36328H6.35352H6.34375H6.33398H6.32422H6.31445H6.30469H6.29492H6.28516H6.27539H6.26562H6.25586H6.24609H6.23633H6.22656H6.2168H6.20703H6.19727H6.1875H6.17773H6.16797H6.1582H6.14844H6.13867H6.12891H6.11914H6.10938H6.09961H6.08984H6.08008H6.07031H6.06055H6.05078H6.04102H6.03125H6.02148H6.01172H6.00195H5.99219H5.98242H5.97266H5.96289H5.95312H5.94336H5.93359H5.92383H5.91406H5.9043H5.89453H5.88477H5.875C5.62647 3.45011 5.425 3.24864 5.425 3.00011Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`FontItalicIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FontItalicIcon;
