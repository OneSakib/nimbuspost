declare global {
  interface Window {
    Waypoint: new (options: {
      element: Element;
      handler: (direction: string) => void;
      offset?: string | number;
    }) => {
      destroy: () => void;
    };
  }
}

export {};
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
