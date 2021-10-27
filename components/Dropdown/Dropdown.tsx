import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import styles from "./Dropdown.module.css";

import styled from "styled-components";

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ;
  align-items: center;
`;

const Dropdown = () => {
  return (
    <>
      <Col>
        <h1>Dropdown Menu</h1>
        <>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className={styles.trigger}>
              Settings
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className={styles.content}>
              <DropdownMenu.Item className={styles.item}>
                New Tab
              </DropdownMenu.Item>
              <DropdownMenu.Item className={styles.item}>
                New Window
              </DropdownMenu.Item>

              <DropdownMenu.Root>
                <DropdownMenu.TriggerItem className={styles.item}>
                  Options
                  <FontAwesomeIcon  className={styles.right} icon={faChevronRight}/>
                </DropdownMenu.TriggerItem>

                <DropdownMenu.Content className={styles.content}>
                  <DropdownMenu.Item className={styles.item}>
                    Option #1
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className={styles.item}>
                    Option #2
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </>
      </Col>
    </>
  );
};

export default Dropdown;
