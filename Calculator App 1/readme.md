# JavaScript Class: Blueprint for Object Creation

In JavaScript, a class serves as a blueprint for creating objects with shared characteristics and behaviors. It defines the structure and behavior of objects based on a common template.

## Overview

A class encapsulates data and functionality into a single unit, allowing for efficient organization and structuring of code. It enables the creation of multiple instances (objects) with consistent properties and methods.

## Example

To illustrate the concept, let's consider an example of creating a class called `Animal`:

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log("Some generic animal sound.");
  }
}
```

This `Animal` class has properties like `name` and `age`, along with a method `makeSound()`.

## Creating Instances

Once the class is defined, instances (objects) can be created based on it:

```javascript
let dog = new Animal("Buddy", 5);
let cat = new Animal("Whiskers", 3);
```

Here, `dog` and `cat` are instances of the `Animal` class, each with its own set of properties.

## Accessing Properties and Methods

Properties and methods of objects can be accessed as follows:

```javascript
console.log(dog.name); // Output: Buddy
console.log(cat.age); // Output: 3

dog.makeSound(); // Output: Some generic animal sound.
cat.makeSound(); // Output: Some generic animal sound.
```

Each object created from the `Animal` class retains its own unique data and functionality, promoting code reusability and maintainability.

## Summary

In essence, a class in JavaScript acts as a blueprint or template for creating objects with predefined properties and behaviors. It facilitates code organization by grouping related data and functions together, enhancing code readability and scalability.

# The `onclick` Attribute in HTML

The `onclick` attribute in HTML serves the purpose of executing a JavaScript function upon user interaction, typically when a button or any clickable element is clicked.

When integrating the `onclick` attribute within a button element, such as:

```html
<button onclick="myFunction()">Click me</button>
```

it signifies that upon clicking the button, the associated JavaScript function `myFunction()` will be invoked.

## Breakdown:

- `<button>`: Defines a button element in HTML.
- `onclick`: An event handler attribute indicating the JavaScript code to execute upon the button's click event.
- `"myFunction()"`: Demonstrates a JavaScript function call enclosed within quotes. In this context, it refers to the function `myFunction()` to be executed when the button is clicked.

## Example Usage:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Button Click Example</title>
    <script>
      function myFunction() {
        alert("Button clicked!");
      }
    </script>
  </head>
  <body>
    <button onclick="myFunction()">Click me</button>
  </body>
</html>
```

In this instance, clicking the button triggers the `myFunction()` JavaScript function, resulting in an alert displaying "Button clicked!".

---

# `getDisplayNumber` Function Documentation

The `getDisplayNumber` function is a JavaScript method designed to format numerical values for display purposes. It takes a numeric input and returns a formatted version of that number.

## Usage

```javascript
getDisplayNumber(number);
```

- **Parameters:**

  - `number`: A numeric value to be formatted.

- **Return Value:**
  - A string representing the formatted number.

## Description

1. **Convert to String:**

   ```javascript
   const stringNumber = number.toString();
   ```

   Converts the input number into a string representation.

2. **Extract Integer Digits:**

   ```javascript
   const integerDigits = parseFloat(stringNumber.split(".")[0]);
   ```

   Splits the string representation at the decimal point (if present) and extracts the integer part, converting it back to a number.

3. **Extract Decimal Digits:**

   ```javascript
   const decimalDigits = stringNumber.split(".")[1];
   ```

   Splits the string representation at the decimal point (if present) and extracts the decimal part, if any.

4. **Initialize Display Variable:**

   ```javascript
   let integerDisplay;
   ```

   Declares a variable named `integerDisplay` without assigning it a value.

5. **Check for NaN (Not a Number):**

   ```javascript
   if (isNaN(integerDigits)) {
     integerDisplay = "";
   }
   ```

   Checks if the extracted integer digits are not a valid number. If not, sets the display variable to an empty string.

6. **Format Integer Display:**

   ```javascript
   else {
       integerDisplay = integerDigits.toLocaleString("en", {
           maximumFractionDigits: 0,
       });
   }
   ```

   If the integer digits are a valid number, formats them using the `toLocaleString` method to include commas for thousands separator.

7. **Check for Decimal Digits:**

   ```javascript
   if (decimalDigits != null) {
     return `${integerDisplay}.${decimalDigits}`;
   }
   ```

   Checks if there are any decimal digits. If present, returns the formatted integer part along with the decimal part, separated by a dot.

8. **Return Integer Display:**
   ```javascript
   else {
       return integerDisplay;
   }
   ```
   If no decimal digits are present, returns just the formatted integer part.

## Example

```javascript
const formattedNumber = getDisplayNumber(123456.789);
console.log(formattedNumber); // Output: "123,456.789"
```

---
