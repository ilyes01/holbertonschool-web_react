import { getFooterCopy, getFullYear, getLatestNotification } from './utils.js'
test("get the current year", () => {
  expect(getFullYear()).toBe(2022);
});
test("check what footer copy returns if true", () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});
test("check what footer copy returns if false", () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});
test("latestnotification", () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});