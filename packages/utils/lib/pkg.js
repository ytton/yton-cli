import fse from "fs-extra";

export const getPkg = (pkgPath) => {
  try {
    return fse.readJsonSync(pkgPath);
  } catch (e) {
    return {};
  }
}