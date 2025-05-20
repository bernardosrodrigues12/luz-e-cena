import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.title}>Inscreva-se para ganhar descontos!</h2>
        <form className={styles.form}>
            <FieldSet>
                <InputText placeholder='Digite o seu melhor e-mail'></InputText>
            </FieldSet>
            <Button variant='default' type='submit'>
                Inscreva-se
            </Button>
        </form>
    </section>
  )
}

export default Newsletter