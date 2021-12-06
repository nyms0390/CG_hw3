#version 330 core
layout(location = 0) out vec4 normal;
layout(location = 1) out float height;

uniform float offset;

void main() {
    const float delta = 0.01;
    // TODO: Generate the normal map.
    //   1. Get the position of the fragment. (screen space)
    //   2. Sample 4 points from combination of x +- delta, y +- delta
    //   3. Form at least 2 triangles from those points. Calculate their surface normal
    //   4. Average the surface normal, then tranform the normal [-1, 1] to RGB [0, 1]
    //   5. (Bonus) Output the H(x, y)
    // Note:
    //   1. Height at (x, y) = H(x, y) = sin(offset - 0.1 * y)
    //   2. A simple tranform from [-1, 1] to [0, 1] is f(x) = x * 0.5 + 0.5
    
    vec4 pos = gl_FragCoord;
    vec3 point1 = vec3(pos.x + delta, pos.y, sin(offset - 0.1 * pos.y));
    vec3 point2 = vec3(pos.x, pos.y + delta, sin(offset - 0.1 * (pos.y + delta)));
    vec3 point3 = vec3(pos.x - delta, pos.y, sin(offset - 0.1 * pos.y));
    vec3 point4 = vec3(pos.x, pos.y - delta, sin(offset - 0.1 * (pos.y - delta)));
    
    vec3 normal1 = cross(point2 - point1, point3 - point1);
    vec3 normal2 = cross(point3 - point2, point4 - point2);
    
    normal = vec4(normalize(0.5 * (normal1 + normal2)), 0);
    normal = normal * 0.5 + 0.5;
    height = sin(offset - 0.1 * pos.y);
}
