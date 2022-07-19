import App from "./App";
import { render, screen } from "@testing-library/react"

describe('Survey Page', () => {
  describe('Layout', () => {
      it("has header", () => {
          render(<App />);
          const header = screen.queryByRole("heading");
          expect(header).toBeInTheDocument();
          expect(header.id).toEqual("title");
          expect(header).not.toBeEmptyDOMElement();
      })
      it('has description', () => {
          render(<App />);
          const element = document.getElementById("description");
          expect(element).not.toBeNull();
      });
      it('has form', () => {
          render(<App />);
          const form = screen.queryByRole("form");
          expect(form).toBeInTheDocument();
          expect(form.id).toEqual("survey-form");
      });
      it('has name input', () => {
          render(<App />);
          const input = screen.getByLabelText("Name");
          expect(input).toBeInTheDocument();
          expect(input.type).toBe("text");
          expect(input.id).toEqual("name");
          expect(input.required).not.toBeFalsy();
          expect(input.parentNode.id).toEqual("survey-form");
      });
      it('has name label', () => {
          render(<App />);
          const label = screen.getByText("Name"); 
          expect(label.id).toEqual("name-label");
          expect(label).toBeInTheDocument();
          expect(label).not.toBeEmptyDOMElement();
          expect(label.parentNode.id).toEqual("survey-form");
      });
      it('has email input', () => {
          render(<App />);
          const input = screen.getByLabelText("Email");
          expect(input).toBeInTheDocument();
          expect(input.type).toBe("email");
          expect(input.id).toEqual("email");
          expect(input.required).not.toBeFalsy();
          expect(input.parentNode.id).toEqual("survey-form");
      });
      it('has email label', () => {
          render(<App />);
          const label = screen.getByText("Email"); 
          expect(label.id).toEqual("email-label");
          expect(label).toBeInTheDocument();
          expect(label).not.toBeEmptyDOMElement();
          expect(label.parentNode.id).toEqual("survey-form");
      });
      it('has age input', () => {
          render(<App />);
          const input = screen.getByLabelText("Age");
          expect(input).toBeInTheDocument();
          expect(input.type).toBe("number");
          expect(input.id).toEqual("number");
          expect(input.min).not.toBeFalsy();
          expect(input.max).not.toBeFalsy();
          expect(input.parentNode.id).toEqual("survey-form");
      });
      it('has age label', () => {
          render(<App />);
          const label = screen.getByText("Age"); 
          expect(label.id).toEqual("number-label");
          expect(label).toBeInTheDocument();
          expect(label).not.toBeEmptyDOMElement();
          expect(label.parentNode.id).toEqual("survey-form");
      });
      it('has dropdown', () => {
          render(<App />);
          const dropdown = screen.getByRole("combobox");
          const container = document.getElementById("survey-form");
          expect(dropdown).toBeInTheDocument();
          expect(dropdown.childNodes.length).toBeGreaterThan(1);
          expect(container.contains(dropdown)).toBeTruthy();
      });
      it('should have radio buttons', () => {
          render(<App />);
          const radioButtons = screen.queryAllByRole('radio');
          const container = document.getElementById("survey-form");
          expect(radioButtons.length).toBeGreaterThan(1);
          radioButtons.forEach(element => {
            expect(element.value).not.toBeFalsy();
            expect(element.name).not.toBeFalsy();
            expect(container.contains(element)).toBeTruthy();
          });
      });
      it('should have checkboxes', () => {
          render(<App />);
          const radioButtons = screen.queryAllByRole('checkbox');
          const container = document.getElementById("survey-form");
          expect(radioButtons.length).toBeGreaterThan(1);
          radioButtons.forEach(element => {
            expect(element.value).not.toBeFalsy();
            expect(element.name).not.toBeFalsy();
            expect(container.contains(element)).toBeTruthy();
          });
      });
  });
});
