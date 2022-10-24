import { SUPER_USER_SIDEBAR, SYSTEM_ADMIN_SIDEBAR, ADMIN_SIDEBAR, USER_SIDEBAR, GUEST_SIDEBAR } from "../services/sidebar";
import { IRole } from "../types/services/user.types";

export const containsAll = (arr1: IRole[], arr2: string[]) => {

    return arr1.every(element => {
        return arr2.indexOf(element) !== -1;
    });
    // return arr1.find((elem) => elem == arr2[0])
}

export const getPriorityRole = (roles: IRole[]) => {
    if (roles.find((role) => role == 'SystemAdmin')) 
        return 'SystemAdmin';
    else if (roles.find((role) => role == 'Admin')) 
        return 'Admin';
    else if (roles.find((role) => role == 'SuperUser')) 
        return 'SuperUser';            
    else if (roles.find((role) => role == 'User')) 
        return 'User';
    else if (roles.find((role) => role == 'Guest')) 
        return 'Guest';     
    else return 'Guest';
}

export const getRoleSidebar = (role: IRole) => {
    if (role == 'SystemAdmin')
        return SYSTEM_ADMIN_SIDEBAR;
    else if (role == 'Admin')
        return ADMIN_SIDEBAR;
    else if (role == 'SuperUser')
        return SUPER_USER_SIDEBAR;
    else if (role == 'User')
        return USER_SIDEBAR;
    else if (role == 'Guest')
        return GUEST_SIDEBAR;
    else return GUEST_SIDEBAR;    
        
}