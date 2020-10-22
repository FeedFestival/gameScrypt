export const GET_PONIT_HIT_AT_MOUSE_POSITION = {
    expanded: false,
    name: 'Get Point Hit At Mouse Position',
    description: '😁',
    code: `
public static Vector3 GetPointHitAtMousePosition(Collider collider = null)
{
    RaycastHit hit;
    Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    if (collider)
    {
        if (collider.Raycast(ray, out hit, 100))
            return new Vector3(Mathf.Round(hit.point.x * 100f) / 100f, Mathf.Round(hit.point.y * 100f) / 100f, Mathf.Round(hit.point.z * 100f) / 100f);
    }
    else
    {
        if (Physics.Raycast(ray, out hit, 100))
            return new Vector3(Mathf.Round(hit.point.x * 100f) / 100f, Mathf.Round(hit.point.y * 100f) / 100f, Mathf.Round(hit.point.z * 100f) / 100f);
    }
    return Vector3.zero;
}
    `
};

export const GET_MID_POINT_OFFSET = {
    expanded: false,
    name: 'Get Mid Point Offset',
    description: '😁',
    code: `
public static Vector3 GetMidPointOffset(Vector3 pos1, Vector3 pos2, float? offset = null, bool returnMidPoint = false)
{
    //get the direction between the two transforms -->
    Vector3 dir = (pos2 - pos1).normalized;

    //get a direction that crosses our [dir] direction
    //NOTE! : this can be any of a buhgillion directions that cross our [dir] in 3D space
    //To alter which direction we're crossing in, assign another directional value to the 2nd parameter
    Vector3 perpDir = Vector3.Cross(dir, Vector3.right);

    //get our midway point
    Vector3 midPoint = (pos1 + pos2) / 2f;

    if (returnMidPoint)
        return midPoint;

    //get the offset point
    //This is the point you're looking for.
    Vector3 offsetPoint = midPoint + (perpDir * offset.Value);

    return offsetPoint;
}
    `
};

export const SMOOTH_LOOK = {
    expanded: false,
    name: 'Smooth Look',
    description: '😁',
    code: `
public static Quaternion SmoothLook(Quaternion rotation, Vector3 newDirection, float speed)
{
    if (newDirection == Vector3.zero)
        return rotation;
    return Quaternion.Lerp(rotation, Quaternion.LookRotation(newDirection), Time.deltaTime * speed);
}
    `
};

export const GET_DIRECTION = {
    expanded: false,
    name: 'Get Direction',
    description: '😁',
    code: `
public static Vector3 GetDirection(Vector3 vectorFrom, Vector3 vectorTo)
{
    return vectorTo - vectorFrom;
}
    `
};

export const CREATE_FROM_PREFAB = {
    expanded: false,
    name: 'Create From Prefab',
    description: '😁',
    code: `
public static GameObject CreateFromPrefab(string resourcePath, Vector3 originPosition)
{
    var targetPrefab = Resources.Load(resourcePath) as GameObject;
    return GameObject.Instantiate(targetPrefab, originPosition, Quaternion.identity) as GameObject;
}
    `
};
