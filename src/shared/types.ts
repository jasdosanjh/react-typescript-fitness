/**
 * Enum representing the selected page.
 *
 * @enum {string}
 * @readonly
 * @property {string} Home - The home page.
 * @property {string} Benefits - The benefits page.
 * @property {string} Classes - The classes page.
 * @property {string} Contact - The contact us page.
 */

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Classes = "classes",
  Contact = "contact",
}

/**
 * Enum representing the benefit type.
 *
 * @typedef {Object} BenefitType
 * @property {JSX.Element} icon - The icon element for the benefit.
 * @property {string} title - The title of the benefit.
 * @property {string} description - The description of the benefit.
 */
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

/**
 * Enum representing the class type.
 *
 * @interface ClassType
 * @property {string} name - The name of the class.
 * @property {string | undefined} description - The description of the class (optional).
 * @property {string} image - The image associated with the class.
 */
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
