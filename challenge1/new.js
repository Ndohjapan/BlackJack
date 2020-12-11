const PERMISSION = {
    admin: ['write', 'edit', 'read', 'delete'],
    moderator: ['write', 'edit', 'read'],
    anybody: ['read']
}

const getPermission = role => PERMISSION[role] || [];

const hasPermission = (role, resource) => getPermissionFor(role).include(resource)