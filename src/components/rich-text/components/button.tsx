import React, { PropsWithChildren, Ref } from "react";
import { BaseProps } from "../../../types/types";

// кнопки для RichText

export const Button = React.forwardRef(
  (
    {
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<HTMLSpanElement>
  ) => {
    const buttonStyle = {
      cursor: "pointer",
      color: reversed ? (active ? "white" : "#aaa") : active ? "black" : "#ccc",
    };

    return <span {...props} ref={ref} style={buttonStyle} />;
  }
);

Button.displayName = "Button";

// Todo: удалить, если не будет использоваться в дальнейшем

// type OrNull<T> = T | null

// interface BaseProps {
//   className: string
//   [key: string]: unknown
// }
// type OrNull<T> = T | null

// export const Icon = React.forwardRef(
//   (
//     { className, ...props }: PropsWithChildren<BaseProps>,
//     ref: Ref<OrNull<HTMLSpanElement>>
//   ) => (
//     <span
//       {...props}
//       ref={ref}
//       className={cx(
//         'material-icons',
//         className,
//         css`
//           font-size: 18px;
//           vertical-align: text-bottom;
//         `
//       )}
//     />
//   )
// )

// export const Button = React.forwardRef(
//     (
//         {
//             className,
//             active,
//             reversed,
//             ...props
//         }: PropsWithChildren<
//             {
//                 active: boolean
//                 reversed: boolean
//             } & BaseProps
//         >,
//         ref: any
//     ) => (
//         <span
//             {...props}
//             ref={ref}
//             className={cx(
//                 className,
//                 css`
//           cursor: pointer;
//           color: ${reversed
//                         ? active
//                             ? 'white'
//                             : '#aaa'
//                         : active
//                             ? 'black'
//                             : '#ccc'};
//         `
//             )}
//         />
//     )
// )

// export const Menu = React.forwardRef(
//   (
//     { className, ...props }: PropsWithChildren<BaseProps>,
//     ref: Ref<OrNull<HTMLDivElement>>
//   ) => (
//     <div
//       {...props}
//       data-test-id="menu"
//       ref={ref}
//       className={cx(
//         className,
//         css`
//           & > * {
//             display: inline-block;
//           }

//           & > * + * {
//             margin-left: 15px;
//           }
//         `
//       )}
//     />
//   )
// )

// export const Toolbar = React.forwardRef(
//   (
//     { className, ...props }: PropsWithChildren<BaseProps>,
//     ref: Ref<OrNull<HTMLDivElement>>
//   ) => (
//     <Menu
//       {...props}
//       ref={ref}
//       className={cx(
//         className,
//         css`
//           position: relative;
//           padding: 1px 18px 17px;
//           margin: 0 -20px;
//           border-bottom: 2px solid #eee;
//           margin-bottom: 20px;
//         `
//       )}
//     />
//   )
// )
