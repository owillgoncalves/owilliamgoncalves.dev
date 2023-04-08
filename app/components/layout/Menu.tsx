import { Link } from "@remix-run/react";
import menuLinks from "~/data/shared/menuLinks";
import { Prose } from "../common/Prose";
import { Title } from "../common/Title";

export function Menu({
  menuOpened,
  toggleMenu,
}: {
  menuOpened: boolean,
  toggleMenu: () => void,
}) {
  return (
    <div
      className={`fixed flex h-full w-full items-center justify-end bg-base-content ${
        menuOpened ? "flex" : "hidden"
      }`}
    >
      <ul className="w-60">
        {menuLinks.map((link) => (
          <li key={link.label} onClick={toggleMenu}>
            <Link to={link.href} prefetch="intent">
              <Prose>
                <Title
                  variant="h3"
                  className="text-base-100"
                  text={link.label}
                />
              </Prose>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
