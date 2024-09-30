import {select} from "d3";

// Define the type for the coordinates
export interface Point {
  x: number;
  y: number;
}

// Draw a line between two points
export function drawLine(
  selector: string, // CSS selector to append the SVG element
  start: Point,     // Starting point (x1, y1)
  end: Point        // Ending point (x2, y2)
): void {
  // Select the element where the SVG will be appended
  const svg = select(selector).append('svg')
    .attr('width', 500)  // Set width (optional, you can customize)
    .attr('height', 500); // Set height (optional, you can customize)

  // Append the line to the SVG
  svg.append('line')
    .attr('x1', start.x)   // Starting x-coordinate
    .attr('y1', start.y)   // Starting y-coordinate
    .attr('x2', end.x)     // Ending x-coordinate
    .attr('y2', end.y)     // Ending y-coordinate
    .attr('stroke', 'black')  // Line color
    .attr('stroke-width', 2); // Line thickness
}
