import { Point2D } from "./Point2D";
import { Point3D } from "./Point3D";
var point2d = new Point2D(2, 3);
console.log(point2d.getXY());
point2d.setXY(4, 5);
console.log(point2d.getXY());
var point3d = new Point3D(4, 6, 2);
console.log(point3d.getXYZ());
point3d.setXYZ(6, 7, 8);
console.log(point3d.getXYZ());
//# sourceMappingURL=main.js.map