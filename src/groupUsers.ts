/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  const grouped: Record<'employees' | 'contractors', Array<unknown>> = {
    employees: [],
    contractors: [],
  };

  (users as Array<{ type: 'EMPLOYEE' | 'CONTRACTOR' }>).forEach(user => {
    if (user.type === 'EMPLOYEE') {
      grouped.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      grouped.contractors.push(user);
    }
  });

  return grouped;
};
