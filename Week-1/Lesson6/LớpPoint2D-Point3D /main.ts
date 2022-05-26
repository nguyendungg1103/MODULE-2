import {Point2D} from "./Point2D";
import {Point3D} from "./Point3D";
let point2d :Point2D = new Point2D(2,3);
console.log(point2d.getXY());
point2d.setXY(4,5);
console.log(point2d.getXY());
let point3d: Point3D = new Point3D(4,6,2);
console.log(point3d.getXYZ())
point3d.setXYZ(6,7,8)
console.log(point3d.getXYZ())

