import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import logoIgnite from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIgnite} alt="" />

        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal setOpenModal={setOpenModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
