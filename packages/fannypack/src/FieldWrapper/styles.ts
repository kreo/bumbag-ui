import { cssClass } from '../styled';
import { altitude, palette, space, theme, fontSize, fontWeight } from '../utils';

export const FieldWrapper = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const Label = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const DescriptionText = (styleProps) => cssClass`
  display: block;
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const HintText = (styleProps) => cssClass`
  display: block;
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const OptionalText = (styleProps) => cssClass`
  font-size: ${fontSize('150')(styleProps)}rem;
  color: ${palette('text100')(styleProps)};
  margin-left: ${space(2)(styleProps)}rem;
  line-height: 1;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const RequiredText = (styleProps) => cssClass`
  color: ${palette('danger')(styleProps)};
  margin-left: ${space(1)(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const ValidationText = (styleProps) => cssClass`
  display: block;
  font-size: ${fontSize('150')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TooltipTrigger = (styleProps) => cssClass`
  && {
    font-size: ${fontSize('100')(styleProps)}rem;
    padding: ${space(1)(styleProps)}rem;
    min-height: unset;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TooltipPopover = (styleProps) => cssClass`
  && {
    position: absolute;
    padding: ${space(1, 'major')(styleProps)}rem;
    margin-top: ${space(1, 'major')(styleProps)}rem;
    width: max-content;
    max-width: 400px;
    z-index: 999999;
    ${altitude('300')(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
